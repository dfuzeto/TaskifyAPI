import { randomUUID } from "node:crypto";
import { Database } from "./database.js";
import { buildRoutePath } from "./utils/builder-route-path.js";

const database = new Database();

export const routes = [
  {
    method: 'GET',
    path: buildRoutePath('/tasks'),
    handler: (req, res) => {
      const { search } = req.query;
      const tasks = database.select('tasks', {
        title: search
      });
      return res.end(JSON.stringify(tasks));
    } 
  },
  
  {
    method: 'POST',
    path: buildRoutePath('/tasks'),
    handler: (req, res) => {
      const { title, description } = req.body;

      let task = {
        id: randomUUID(),
        title,
        description,
        completed_at: null,
        created_at: new Date(),
        updated_at: new Date()
      };
  
      database.insert('tasks', task);
  
      return res.writeHead(201).end();
    }
  },
  
  {
    method: 'PUT',
    path: buildRoutePath('/tasks/:id'),
    handler: (req, res) => {
      const taskId = req.params.id;
      let { title, description, completed, updated_at } = req.body;

      updated_at = new Date();

      const existingTasks = database.select('tasks', { id: taskId });

      if (existingTasks.length === 0) {
        return res.writeHead(404).end();
      }

      const existingTask = existingTasks[0];

      if (title !== undefined) {
        existingTask.title = title;
      }
      if (description !== undefined) {
        existingTask.description = description;
      }
      if (completed !== undefined) {
        existingTask.updated_at = updated_at ? new Date() : null;
      }

      database.update('tasks', taskId, existingTask);

      return res.writeHead(200).end();
    }
  },

  {
    method: 'PATCH',
    path: buildRoutePath('/tasks/:id'),
    handler: (req, res) => {
      const taskId = req.params.id;

      const tasks = database.select('tasks', {
        id: taskId
      });

      if (tasks.length > 0) {
        tasks[0].completed_at = true;
        console.log(`Tarefa com o título ${taskId} foi concluída`);
        return res.writeHead(200).end();
      } else {
        return res.writeHead(404).end();
      }
    }
  },

  {
    method: 'DELETE',
    path: buildRoutePath('/tasks/:id'), 
    handler: (req, res) => {
      const taskId = req.params.id;
      try {
        database.delete('tasks', taskId);
        console.log('Usuário excluído com sucesso');
        res.writeHead(200).end();
      } catch (error) {
        console.log(error);
        res.writeHead(500).end();
      }
    }
  }
];
