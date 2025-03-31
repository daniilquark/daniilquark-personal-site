document.addEventListener('DOMContentLoaded', () => {
    const statusBar = document.getElementById('status-bar');
  
    fetch(window.location.href, { method: 'HEAD' })
      .then(response => {
        const status = response.status;
  
        if (statusBar) {
          statusBar.classList.add(`status-${status}`);
        }
      })
      .catch(error => {
        console.error('Ошибка при получении статуса:', error);
        if (statusBar) {
          statusBar.classList.add('status-500');
        }
      });
  });
  