import { Container, Stack, Table } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

function Acordion({ payload }) {
  // console.log('payload', payload)
  return (
    <div className="container">
      {payload.length > 0 &&
        payload.map((data) => (
          <Accordion
            className="m-2"
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
                    {data.problems.map((problem) => (
                      <tr key={problem.id}>
                        <td>
                          <input type="checkbox" name="" id="" />
                        </td>
                        <td>{problem.name}</td>
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
}

export default Acordion;
