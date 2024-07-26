import { TodoList } from './todo-list';

describe('todo-list', () => {

    it('should return empty task list', () => {
        const todoList = new TodoList();

        expect(todoList.getTasks()).toEqual([]);
    });

    it('should add task to a todo list', () => {
        const task = 'prepare for an interview';
        const todoList = new TodoList();

        todoList.addTask(task);

        expect(todoList.getTasks().includes(task)).toBeTruthy();
    });

    it('should remove task from a todo list', () => {
        expect(true).toBe(false);
    });

    it('should allow to mark task as completed', () => {
        expect(true).toBe(false);
    });

    it('should display completed tasks', () => {
        expect(true).toBe(false);
    });

    it('should allow to mark task as incompleted', () => {
        expect(true).toBe(false);
    });

    it('should display incompleted tasks', () => {
        expect(true).toBe(false);
    });

    it('should allow to add task with complexity', () => {
        expect(true).toBe(false);
    });

    it('should allow to display tasks based on their complexity', () => {
        expect(true).toBe(false);
    });

    it('should allow to dynamically define task statuses per todolist', () => {
        expect(true).toBe(false);
    });

    it('should allow to move tasks between statuses', () => {
        expect(true).toBe(false);
    });

    it ('should allow to display tasks based on their statuses', () => {
        expect(true).toBe(false);
    });
});