@Scope(value = "session")
@Component(value = "testService")
public class TestService {
 
    @Autowired
    private Dao<test> testDao;
    private Todo todo = new Todo();
 
    public void save() {
        todoDao.save(todo);
        todo = new Todo();
    }
 
    public Collection<Todo> getAllTodo() {
        return testDao.getAll();
    }
 
    public int saveTodo(Todo test) {
        validate(todo);
        return todoDao.save(todo);
    }
 
    private void validate(Todo todo) {
        // Details omitted
    }
 
    public Todo getTodo() {
        return todo;
    }
}