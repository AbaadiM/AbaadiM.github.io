document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById("auth-modal");
  const userIcon = document.getElementById("user-icon");
  const mobileUserIcon = document.getElementById("mobile-user-icon");
  const closeBtn = document.getElementsByClassName("close")[0];
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");
  const switchToSignup = document.getElementById("switch-to-signup");
  const switchToLogin = document.getElementById("switch-to-login");
  const loginBtn = document.getElementById('login-btn');
  const signupBtn = document.getElementById('signup-btn');
  const loginEmail = document.getElementById('login-email');
  const loginPassword = document.getElementById('login-password');
  const signupName = document.getElementById('signup-name');
  const signupEmail = document.getElementById('signup-email');
  const signupPassword = document.getElementById('signup-password');

  if (userIcon) {
    userIcon.onclick = function() {
      modal.style.display = "block";
    };
  }

  if (mobileUserIcon) {
    mobileUserIcon.onclick = function() {
      modal.style.display = "block";
    };
  }

  if (closeBtn) {
    closeBtn.onclick = function() {
      modal.style.display = "none";
    };
  }

  if (switchToSignup) {
    switchToSignup.onclick = function() {
      loginForm.style.display = "none";
      signupForm.style.display = "block";
    };
  }

  if (switchToLogin) {
    switchToLogin.onclick = function() {
      signupForm.style.display = "none";
      loginForm.style.display = "block";
    };
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  let MainImg = document.getElementById("MainImg");
  let smallimg = document.getElementsByClassName("small-Img");

  if (smallimg.length > 0) {
    smallimg[0].onclick = function () {
      MainImg.src = smallimg[0].src;
    };
    smallimg[1].onclick = function () {
      MainImg.src = smallimg[1].src;
    };
    smallimg[2].onclick = function () {
      MainImg.src = smallimg[2].src;
    };
    smallimg[3].onclick = function () {
      MainImg.src = smallimg[3].src;
    };
  }

  const bar = document.getElementById("bar");
  const navItems = document.getElementsByClassName("nav-items");

  if (bar && navItems.length > 0) {
    bar.addEventListener("click", () => {
      for (let item of navItems) {
        item.classList.toggle("active");
      }
    });
  }

  signupBtn.addEventListener('click', async () => {
    console.log("Signup button clicked");
  
    const name = signupName.value;
    const email = signupEmail.value;
    const password = signupPassword.value;
  
    if (!name || !email || !password) {
      alert('Please fill in all fields.');
      return;
    }
  
    try {
      const response = await fetch('http://localhost:4000/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });
  
      if (!response.ok) {
        throw new Error('Sign-up failed.');
      }
  
      const result = await response.json();
      alert('Sign Up Successful! Please log in.');
      switchToLogin.click();
    } catch (error) {
      console.error('Sign up error:', error);
      alert('Error during sign up. Please try again.');
    }
  });
  
  loginBtn.addEventListener('click', async () => {
    console.log("Login button clicked");
  
    const email = loginEmail.value;
    const password = loginPassword.value;
  
    if (!email || !password) {
      alert('Please enter your email and password.');
      return;
    }
  
    try {
      const response = await fetch('http://localhost:4000/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (!response.ok) {
        throw new Error('Invalid email or password.');
      }
  
      const result = await response.json();
      alert('Login successful!');
      modal.style.display = 'none';
    } catch (error) {
      console.error('Login error:', error);
      alert('Invalid email or password.');
    }
  });
  
});
