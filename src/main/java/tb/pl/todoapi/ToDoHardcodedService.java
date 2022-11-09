package tb.pl.todoapi;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class ToDoHardcodedService {
    private static List<ToDo> todos = new ArrayList<>();
    private static int counter = 0;

    static {
        todos.add(new ToDo(counter++, "In28Minutes", "Learn to dance", new Date(), false));
        todos.add(new ToDo(counter++, "Travel-travel", "Visit Spain", new Date(), false));
        todos.add(new ToDo(counter++, "Programmer23", "Exercise React", new Date(), false));
    }

    public List<ToDo> findAllTodos() {
        return todos;
    }

    public ToDo save(ToDo todo) {
        if (todo.getId() == -1) {
            todo.setId(++counter);
            todos.add(todo);
        } else {
            deleteById(todo.getId());
            todos.add(todo);
        }
        return todo;
    }

    private void deleteById(Integer id) {
        todos.removeIf(todo1 -> todo1.getId() == id);
    }


    Optional<ToDo> removeItem(Integer id) {
        Optional<ToDo> todoToRemove = findById(id);
        if (todoToRemove.isPresent()) {
            todos.remove(todoToRemove.get());
        }
        System.out.println(todos);
        return todoToRemove;
    }

    public Optional<ToDo> findById(Integer id) {
        return todos.stream().filter(todo -> todo.getId() == id).findFirst();
    }
}
