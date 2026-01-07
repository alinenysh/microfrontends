## Запуск
Remote app: (порт 3001)
cd remote-app
npm install
npm run build
npm run serve

Host app: (на любом порте)
cd host-app
npm install
npm run dev

## связь проектов

Проекты связаны с помощью Vite Module Federation Plugin. Host app - основное приложение, что импортирует в себе компоненты из Remote app. 

<img width="960" height="457" alt="image" src="https://github.com/user-attachments/assets/596ad756-854b-4083-bbdb-1d1d5103b066" />

Также есть маршрутизация с помощью react-router-dom (настроена в основном приложении), что имеет путь /remote, страница которого берется из микрофронтенда remote app.

<img width="704" height="474" alt="image" src="https://github.com/user-attachments/assets/54bb0ec1-bbe4-44fb-9285-dd1b9aab651f" />

## реализация передачи данных

Состояние хранится в host, данные передаются в remote как props, remote-компоненты используют эти props для отображения.

<img width="994" height="568" alt="image" src="https://github.com/user-attachments/assets/8671c3e4-189c-4fc2-a4ee-cfb4ed9ac481" />

## используемые технологии
HTML,CSS 

React 

Vite

Vite Module Federation Plugin 

react-router-dom 

TypeScript 

### механизмы

React.lazy 

Suspense

## принцип коммуникации и ограничений
### коммуникация
Главное приложение host-app хранит всё состояние и бизнес-логику.

При переходе на страницу, принадлежащую remote-app, host передаёт необходимые данные в виде props.

Remote-страница и экспортируемые компоненты принимают эти props и используют их только для отображения.

Поскольку React поддерживает реактивное обновление интерфейса, любые изменения состояния в host автоматически отражаются в remote-модулях без перезагрузки страницы.

### ограничения: 

Remote не может изменять состояние host напрямую. Он получает данные только для чтения.

Зависимость от структуры интерфейсов. Host и remote должны заранее согласовать типы и формат передаваемых props.

Сложность при большом количестве передаваемых данных. Если параметров становится много, код интеграции разрастается и становится труднее поддерживать.
