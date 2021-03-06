package learn.rockClimbing.data;

import learn.rockClimbing.data.mappers.RouteGradeMapper;
import learn.rockClimbing.models.GradingSystem;
import learn.rockClimbing.models.RouteGrade;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class RouteGradeJdbcTemplateRepository implements RouteGradeRepository {
    private final JdbcTemplate jdbcTemplate;

    public RouteGradeJdbcTemplateRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<RouteGrade> findAllRouteGrades() {
        final String sql = "select route_grade_id, grading_system, grade_level from route_grade;";
        return jdbcTemplate.query(sql, new RouteGradeMapper());
    }

    @Override
    public List<RouteGrade> findRouteGradeByGradingSystem(GradingSystem gradingSystem) {
        final String sql = "select route_grade_id, grade_level " +
                "from route_grade " +
                "where grading_system = ?;";
        return jdbcTemplate.query(sql, new RouteGradeMapper(), gradingSystem);
    }

    @Override
    public RouteGrade findRouteGradeById(int routeGradeId) {
        final String sql = "select route_grade_id, grading_system, grade_level " +
                "from route_grade " +
                "where route_grade_id = ?;";
        return jdbcTemplate.query(sql, new RouteGradeMapper(), routeGradeId).stream().findFirst().orElse(null);
    }
}
