package tb.pl.todoapi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ToDoResource {

    @Autowired
    ToDoHardcodedService toDoHardcodedService;

    @GetMapping("/users/{username}/todos")
    public List<ToDo> getToDosForUser(@PathVariable String username) {
        return toDoHardcodedService.findAllTodos();
    }

    @DeleteMapping("/users/{username}/todos/{id}")
    public ResponseEntity<Void> removeToDo(@PathVariable String username,@PathVariable Integer id) {
        Optional<ToDo> toDoToRemove = toDoHardcodedService.removeItem(id);
        if(toDoToRemove.isPresent()){
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
