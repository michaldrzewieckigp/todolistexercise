export class TodoList {
    private readonly tasks: string[] = [];

    public getTasks() {
        return this.tasks;
    }

    public addTask(task: string) {
        this.tasks.push(task);
    }
}