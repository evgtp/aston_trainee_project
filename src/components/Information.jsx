function Information() {
  return (
    <div
      className="content__about-the-project"
      style={{
        width: "850px",
        marginBottom: "45px",
        textAlign: "center",
      }}
    >
      <h1>About the project</h1>
      <p style={{ marginBottom: "45px", marginTop: "45px" }}>
        Данный проект создан по мотивам приключений Рика и Морти. Здесь вы
        можете поближе познакомиться со всеми персонажами и локациями данного
        мультсериала.
      </p>
      <p>
        Rick and Morty API — это REST(ish) и GraphQL API, основанный на телешоу
        Rick and Morty . Вам будет доступно около сотни персонажей, образов,
        локаций и эпизодов. API Рика и Морти заполнен канонической информацией,
        как показано в телешоу.
      </p>
    </div>
  );
}

export default Information;
