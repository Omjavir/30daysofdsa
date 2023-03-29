import React, { useEffect, useState } from "react";
import { Accordion, Container, Table } from "react-bootstrap";

const Acordion = ({ payload }) => {
  const [checkedState, setCheckedState] = useState(new Array(90).fill(false));

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
  };

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items"));
    if (items) {
      setCheckedState(items);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(checkedState));
  }, [checkedState]);

  return (
    <div className="container ">
      <Container>
        <h4 className="text-green-600 font-semibold">Your Progress :</h4>
        <input
          className="w-full accent-green-500"
          type="range"
          name=""
          id=""
          min={0}
          value={0}
          max={payload.length * 3}
        />
      </Container>
      {payload.length > 0 &&
        payload.map((data) => (
          <Accordion
            className="m-2 shadow-sm"
            key={data.id}
            defaultActiveKey={data.id[0]}
            alwaysOpen
          >
            <Accordion.Item eventKey={data.id}>
              <Accordion.Header>
                Day {data.id} : {data.title}
              </Accordion.Header>
              <Accordion.Body>
                <Table bordered hover>
                  <thead>
                    <tr>
                      <th></th>
                      <th>Problem</th>
                      <th>Link</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.problems.map((problem, index) => (
                      <tr key={problem.id}>
                        <td>
                          <input
                            className="accent-green-500"
                            type="checkbox"
                            id={`custom-checkbox-${index}`}
                            name={problem.name}
                            value={problem.name}
                            g
                            checked={checkedState[index]}
                            onChange={() => handleOnChange(index)}
                          />
                        </td>
                        <td className="font-semibold">{problem.name}</td>
                        <td>
                          <a href={problem.link} target={"_blank"}>
                            Link
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        ))}
    </div>
  );
};

export default Acordion;
