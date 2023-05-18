// Simulated user data
const users = [
    { username: 'john', password: 'password1' },
    { username: 'jane', password: 'password2' },
    { username: 'joe', password: 'password3' }
  ];
  
  // Simulated login function
  function login(username, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = users.find(user => user.username === username);
        if (user && user.password === password) {
          resolve('Login successfully');
        } else {
          reject(new Error('Login failed'));
        }
      }, 1000); // Simulate asynchronous login process with a timeout
    });
  }
  
  // Usage example
  const username = 'john';
  const password = 'password1';
  
  login(username, password)
    .then(message => {
      console.log(message);
    })
    .catch(error => {
      console.error(error.message);
    });
  
-------------------------------------------------------------------------------------------------------------------
    #include <stdio.h>
#include <sys/types.h>
#include <sys/wait.h>
#include <unistd.h>
#include <sys/times.h>

int main() {
    int n = 5;  // Number of child processes to create
    struct tms start_time, end_time;
    double start_clock, end_clock;

    start_clock = (double)times(&start_time) / sysconf(_SC_CLK_TCK);  // Get the start time of the parent process in seconds

    for (int i = 0; i < n; i++) {
        pid_t pid = fork();
        if (pid == -1) {
            perror("Fork failed");
            return 1;
        } else if (pid == 0) {
            // Child process
            printf("Child process %d started.\n", i + 1);
            sleep(1);  // Simulate some work
            printf("Child process %d finished.\n", i + 1);
            return 0;
        }
    }

    // Parent process
    for (int i = 0; i < n; i++) {
        wait(NULL);  // Wait for each child process to terminate
    }

    end_clock = (double)times(&end_time) / sysconf(_SC_CLK_TCK);  // Get the end time of the parent process in seconds

    double user_time = (end_time.tms_cutime - start_time.tms_cutime) / (double)sysconf(_SC_CLK_TCK);
    double kernel_time = (end_time.tms_cstime - start_time.tms_cstime) / (double)sysconf(_SC_CLK_TCK);

    printf("Total cumulative time in user mode: %.6f seconds\n", user_time);
    printf("Total cumulative time in kernel mode: %.6f seconds\n", kernel_time);

    return 0;
}
