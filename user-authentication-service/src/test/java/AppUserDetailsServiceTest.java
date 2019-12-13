import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import com.cognizant.userauthenticationservice.service.AppUserDetailsService;

@SpringBootTest
@ActiveProfiles("test")
class AppUserDetailsServiceTest {
	
	@Mock
	private AppUserDetailsService appUserDetailsService;
	
	@BeforeEach
	void beforeEach() {
		
	}
	
	@Test
	void test() {
		
	}

}
