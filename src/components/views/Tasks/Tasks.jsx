import "./Tasks.styles.css";
import { Header } from "../../Header/Header";
import { useResize } from "../../../hooks/useResize";

export const Tasks = () => {
  const { isPhone } = useResize();
  const renderAllCards = (cards) => {};

  return (
    <>
      <Header />
      <main id="tasks">
        <section className="wrapper_list">
          <div className="list_header">
            <h2>Mis tareas</h2>
          </div>
          {isPhone ? (
            <div className="list phone">{renderAllCards()}</div>
          ) : (
            <div className="list_group">
              <div className="list">
                <div className="card">
                  <div className="close">x</div>
                  <h3>Tarea 2</h3>
                  <h6>14/7/2022 11:45 hs.</h6>
                  <h5>Martín Hernandez</h5>
                  <button type="button">Nueva</button>
                  <button type="button">Alta</button>
                  <p>Descripción Fake</p>
                </div>
              </div>
              <div className="list">
                <div className="card">
                  <div className="close">x</div>
                  <h3>Tarea 3</h3>
                  <h6>14/7/2022 11:45 hs.</h6>
                  <h5>Martín Hernandez</h5>
                  <button type="button">Nueva</button>
                  <button type="button">Alta</button>
                  <p>Descripción Fake</p>
                </div>
              </div>
            </div>
          )}
        </section>
      </main>
    </>
  );
};
