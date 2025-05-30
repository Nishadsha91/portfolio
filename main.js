function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

function sendMail() 
{
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) 
    {
        alert('Please fill in all fields');
                return;
    }

            // Add your email sending logic here

alert('Thank you for your message! I will get back to you soon.');
            
            // Clear form
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
}

        // Close mobile menu when clicking on a link
        
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
    document.getElementById('nav').classList.remove('active');
            });
        });