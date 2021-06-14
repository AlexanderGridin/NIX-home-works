let actionButton = document.querySelector('#action');
actionButton.addEventListener('click', function(){
  showNotification({
    top: 10, // 10px от верхней границы окна (по умолчанию 0px)
    right: 10, // 10px от правого края окна (по умолчанию 0px)
    html: 'Hello!', // HTML-уведомление
    className: 'welcome' // дополнительный класс для div (необязательно)
  });
});

function showNotification(options){
  let {top = 0, right = 0, html = '', className = 'welcome'} = options;
  let notification = document.createElement('div');

  notification.innerHTML = html;
  notification.classList.add(className);

  notification.style.position = 'fixed';
  notification.style.top = `${top}px`;
  notification.style.right = `${right}px`;

  setTimeout(() => {
    notification.remove();
  }, 1500);

  document.body.append(notification);
}