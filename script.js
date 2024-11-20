const toggleThemeButton = document.getElementById('toggleTheme');
toggleThemeButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

const filterButtons = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project');

filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        const category = this.getAttribute('data-category');
        projects.forEach(project => {
            if (project.getAttribute('data-category') === category || category === 'all') {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    });
});

projects.forEach(project => {
    if (category === 'all' || project.getAttribute('data-category') === category) {
        project.classList.remove('hide');
    } else {
        project.classList.add('hide');
    }
});

const toggleButton = document.getElementById('toggle-dark-mode');


toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});