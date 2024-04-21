## Rust-Anime-Summer

### Для запуска потребуется
- Клонировать репозиторий

```bash
git clone https://github.com/cookies-with-tea/movies-site.git -b rust-backend
```
- Скопировать `.env` 
```bash
cp .env.example .env
```
- Заполнить `.env`
- Запустить контейнеры
```bash
docker-compose up -d --build
```

<hr />

### Подсказки, чтобы не забыть

**fix postgres with sqlx**
```
cargo add sqlx -F postgres
```

**add new migration**
```
sqlx migrate add -r <name>
```
