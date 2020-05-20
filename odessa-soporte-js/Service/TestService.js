@Scope(value = "session")
@Component(value = "testService")
public class TestService {
 
    @Autowired
    private Dao<Todo> testDao;
    private Prueba Prueba = new Prueba();
 
    public void save() {
        PruebaDao.save(Prueba);
        Prueba = new Prueba();
    }
 
    public Collection<Prueba> getAllPrueba() {
        return PruebaDao.getAll();
    }
 
    public int savePrueba(Prueba Prueba) {
        validate(Prueba);
        return PruebaDao.save(Prueba);
    }
 
    private void validate(Prueba Prueba) {
        // Details omitted
    }
 
    public Prueba getPrueba() {
        return Prueba;
    }
}