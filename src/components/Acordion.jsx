import React, { useEffect, useState } from "react";
import { Accordion, Container, Table } from "react-bootstrap";

const Acordion = ({ payload }) => {
  // console.log('payload', payload)
  const [checkedList, setCheckedList] = useState([
    new Array(90).fill(false),
  ]);

  useEffect(() => {
    const storedValue = localStorage.getItem("checkboxList");
    if (storedValue) {
      setCheckedList(JSON.parse(storedValue));
    }
  }, []);

  const handleCheckboxChange = (event, index) => {
    const {
      target: { checked },
    } = event;
    const newCheckedList = [...checkedList];
    newCheckedList[index] = checked;
    setCheckedList(newCheckedList);
    localStorage.setItem("checkboxList", JSON.stringify(newCheckedList));
  };

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
                            checked={checkedList[index] || false}
                            onChange={(event) =>
                              handleCheckboxChange(event, index)
                            }
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
