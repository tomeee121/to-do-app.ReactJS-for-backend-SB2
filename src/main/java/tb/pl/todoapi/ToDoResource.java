package tb.pl.todoapi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.ArrayDeque;
import java.util.List;
import java.util.Optional;
import java.util.Queue;
import java.util.concurrent.ConcurrentLinkedQueue;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ToDoResource {

    @Autowired
    ToDoHardcodedService toDoHardcodedService;

    @GetMapping("/users/{username}/todos")
    public List<ToDo> getToDosForUser(@PathVariable String username) {
        return toDoHardcodedService.findAllTodos();
    }

    @GetMapping("/users/{username}/todos/{id}")
    public ToDo getToDo(@PathVariable String username, @PathVariable Integer id) {
        return toDoHardcodedService.findById(id).orElseThrow(() -> new RuntimeException("nothing found by this id"));
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
    @PutMapping("/users/{username}/todos/{id}")
    public ResponseEntity<ToDo> updateToDo(@PathVariable String username,@PathVariable Integer id, @RequestBody ToDo todo) {
        System.out.println("in put method");
        ToDo saved = toDoHardcodedService.save(todo);
        return new ResponseEntity<>(saved, HttpStatus.OK);
    }

    @PostMapping("/users/{username}/todos")
    public ResponseEntity<String> updateToDo(@PathVariable String username, @RequestBody ToDo todo) {
        ToDo saved = toDoHardcodedService.save(todo);
        String uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(saved.getId()).toUri().toString();
        return new ResponseEntity<>(uri, HttpStatus.CREATED);
    }
}
