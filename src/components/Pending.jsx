import React, { useState } from "react";
import { Modal, Button, Dropdown, DropdownButton } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Pending() {
  const [components, setComponents] = useState([
    {
      id: 1,
      title: "Open",
      button: "Add user",
      tasks: [{ taskId: 1, taskText: "Task 1" }],
      className: "btn btn-success",
    },
    {
      id: 2,
      title: "Pending",
      button: "Add user",
      tasks: [{ taskId: 2, taskText: "Task 2" }],
      className: "btn btn-success",
    },
    {
      id: 3,
      title: "Inprog",
      button: "Add user",
      tasks: [{ taskId: 3, taskText: "Task 3" }],
      className: "btn btn-success",
    },
    {
      id: 4,
      title: "Complete",
      button: "Add user",
      tasks: [{ taskId: 4, taskText: "Task 4" }],
      className: "btn btn-success",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [selectedSectionForEdit, setSelectedSectionForEdit] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    let taskText = e.target[0].value;

    if (editingTask !== null) {
      setComponents((prevComponents) =>
        prevComponents.map((section) => {
          if (section.id === selectedSectionForEdit) {
            return {
              ...section,
              tasks: section.tasks.map((task) =>
                task.taskId === editingTask ? { ...task, taskText } : task
              ),
            };
          }
          return section;
        })
      );
      setEditingTask(null);
      setSelectedSectionForEdit(null);
    } else {
      setComponents((prevComponents) =>
        prevComponents.map((section) => {
          if (section.id === selectedSectionForEdit) {
            return {
              ...section,
              tasks: [
                ...section.tasks,
                { taskId: section.tasks.length + 1, taskText },
              ],
            };
          }
          return section;
        })
      );
    }

    setShowModal(false);
  };

  const add = (sectionId) => {
    setShowModal(true);
    setEditingTask(null);
    setSelectedSectionForEdit(sectionId);
  };

  const edit = (sectionId, taskId) => {
    const taskToEdit = components
      .find((section) => section.id === sectionId)
      .tasks.find((task) => task.taskId === taskId);
    setEditingTask(taskId);
    setSelectedSectionForEdit(sectionId);
    setShowModal(true);
  };

  const deleteTask = (sectionId, taskId) => {
    setComponents((prevComponents) =>
      prevComponents.map((section) => {
        if (section.id === sectionId) {
          return {
            ...section,
            tasks: section.tasks.filter((task) => task.taskId !== taskId),
          };
        }
        return section;
      })
    );
  };

  return (
    <div className="container d-flex mx-auto mt-5">
      {components.map((section) => (
        <div key={section.id} className="row">
          <div className="col-md-20">
            <div className="card w-100">
              <div className="card-header">
                <h1 className="text-center">{section.title}</h1>
              </div>
              <div className="card-body d-flex">
                {section.tasks.map((task) => (
                  <div key={task.taskId}>
                    <h1>{task.taskText}</h1>
                    <button
                      className="btn btn-info"
                      onClick={() => edit(section.id, task.taskId)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteTask(section.id, task.taskId)}
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
              <div className="card-footer">
                <button
                  className={`btn ${section.className}`}
                  onClick={() => add(section.id)}
                >
                  {section.button}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            {editingTask !== null ? "Edit Task" : "Add Task"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit} id="form">
            <input
              type="text"
              placeholder="task..."
              defaultValue={
                editingTask !== null
                  ? components
                      .find((section) => section.id === selectedSectionForEdit)
                      ?.tasks.find((task) => task.taskId === editingTask)
                      ?.taskText || ""
                  : ""
              }
            />
            {editingTask !== null && (
              <DropdownButton
                title={`Select Section (${selectedSectionForEdit})`}
                onSelect={(eventKey) =>
                  setSelectedSectionForEdit(parseInt(eventKey))
                }
              >
                {components.map((section) => (
                  <Dropdown.Item
                    key={section.id}
                    eventKey={section.id}
                    active={section.id === selectedSectionForEdit}
                  >
                    {section.title}
                  </Dropdown.Item>
                ))}
              </DropdownButton>
            )}
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" form="form" type="submit">
            Save changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
