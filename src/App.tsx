import Table from "../Table";

// components
import ButtonDocs from "./components/Buttons";
import CardDocs from "./components/Cards";
import AlertDocs from "./components/Alerts";
import FormDocs from "./components/Forms";

//
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const data = [
    { no: 1, name: "Ilham", id: 101 },
    { no: 2, name: "Aisyah", id: 102 },
    { no: 3, name: "Zara", id: 103 },
  ];

  return (
    <Router>
      <nav className="flex justify-between items-center px-10 py-5 border-b fixed top-0 left-0 right-0 bg-white z-50">
        <div>
          <h1 className="text-xl font-semibold">🚀ALOPE UI</h1>
        </div>
        <div>
          <a href="">See in GITHUB</a>
        </div>
      </nav>

      <section className="grid grid-cols-6 px-10 mt-20">
        <aside className="fixed top-20">
          <h3 className="text-xl font-semibold">Components</h3>
          <ul className="list-disc pl-5 mt-4">
            <li>
              <Link to="/alert" className="hover:text-indigo-500">
                Alert
              </Link>
            </li>
            <li>
              <Link to="/button" className="hover:text-indigo-500">
                Button
              </Link>
            </li>
            <li>
              <Link to="/card" className="hover:text-indigo-500">
                Card
              </Link>
            </li>
            <li>
              <Link to="/form" className="hover:text-indigo-500">
                Form
              </Link>
            </li>
            <li>
              <Link to="/table" className="hover:text-indigo-500">
                Table
              </Link>
            </li>
          </ul>
        </aside>
        <div></div>
        <main className="col-span-5">
          <div className="container px-10 py-5">
            <Routes>
              <Route path="/alert" element={<AlertDocs />} />
              <Route path="/button" element={<ButtonDocs />} />
              <Route path="/card" element={<CardDocs />} />
              <Route path="/form" element={<FormDocs />} />
              <Route
                path="/table"
                element={
                  <section className="mb-5">
                    <h2 className="text-2xl font-bold">Table</h2>
                    <div className="mt-8">
                      <h3 className="text-xl font-semibold">Simple table</h3>

                      <Table thead={["No", "Name"]} tbody={data} align="left" />
                    </div>
                    <div className="mt-8">
                      <h3 className="text-xl font-semibold">Stripped Table</h3>
                      <Table
                        thead={["No", "Name"]}
                        tbody={data}
                        stripped
                        align="left"
                        actions={(row) => (
                          <a
                            href={`/details/${row.id}`}
                            className="text-blue-500"
                          >
                            Detail
                          </a>
                        )}
                      />
                    </div>
                    <div className="mt-8">
                      <h3 className="text-xl font-semibold">
                        Custom Background Table Head
                      </h3>
                      <Table
                        thead={["No", "Name"]}
                        tbody={data}
                        theadBg="gradient-dark"
                        stripped
                        align="left"
                        actions={(row) => (
                          <a
                            href={`/details/${row.id}`}
                            className="text-blue-500"
                          >
                            Detail
                          </a>
                        )}
                      />
                    </div>
                    <div className="mt-8">
                      <h3 className="text-xl font-semibold">
                        Hovered & Borderless Table
                      </h3>
                      <Table
                        thead={["No", "Name"]}
                        tbody={data}
                        theadBg="gradient-dark"
                        hovered
                        borderless
                        stripped
                        align="left"
                        actions={(row) => (
                          <a
                            href={`/details/${row.id}`}
                            className="text-blue-500"
                          >
                            Detail
                          </a>
                        )}
                      />
                      <div className="mt-8">
                        <h3 className="text-xl font-semibold">
                          Table with Action Button
                        </h3>
                        <Table
                          thead={["No", "Name", "Action"]}
                          tbody={data}
                          theadBg="gradient-dark"
                          hovered
                          borderless
                          stripped
                          align="left"
                          actions={(row) => (
                            <a
                              href={`/details/${row.id}`}
                              className="text-blue-500"
                            >
                              Detail
                            </a>
                          )}
                        />
                      </div>
                    </div>
                  </section>
                }
              />
            </Routes>
          </div>
        </main>
      </section>
    </Router>
  );
}

export default App;
