# User Stories

## US01: Login

### As an Administrator
I want to login to the application so that I can get access to the welcome screen and application menu.

### Conditions and Validations
- Login ID must be a valid email address
- Password requirements:
    - At least one uppercase letter
    - At least one lowercase letter
    - At least one digit
    - At least one special character
- Email ID and password cannot be blank
- Account gets disabled for 30 minutes after three invalid login attempts
- System must display appropriate error and exception messages

### Acceptance Criteria

#### Scenario 1: Successful Login
**Given** that I am an administrator  
**When** I enter correct User ID and Password in the Login screen  
**Then** I should be able to access the application menu  
**And** navigate the menu to view the required details

#### Scenario 2: Failed Login Attempt
**Given** that I am an administrator  
**When** I enter incorrect User ID with Password in the Login screen  
**Then** I should be prompted for a maximum of three times to reenter the credentials

#### Scenario 3: Account Lockout
**Given** that I am an administrator  
**When** I enter incorrect User ID with Password in the Login screen consecutively for three times  
**Then** my account should get disabled for 30 minutes