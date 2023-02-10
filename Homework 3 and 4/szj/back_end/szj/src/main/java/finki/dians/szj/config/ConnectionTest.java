package finki.dians.szj.config;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class ConnectionTest {
    public static void main(String[] args) {
        String jdbcUrl = "jdbc:mysql://localhost:3306/dians_final?useSSL=false&serverTimeZone=UTC";
        String username = "root";
        String password = "joana";
        try (Connection connection = DriverManager.getConnection(jdbcUrl, username, password)) {
            System.out.println("Connected to MySQL server");
        } catch (SQLException e) {
            System.out.println("Failed to connect to MySQL server");
            e.printStackTrace();
        }
    }
}