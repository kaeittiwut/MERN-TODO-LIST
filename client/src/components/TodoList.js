import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'react-uuid';

class TodoList extends Component {
  state = {
    items: [
      { id: uuid(), name: 'Test1' },
      { id: uuid(), name: 'Test2' },
      { id: uuid(), name: 'Test3' },
      { id: uuid(), name: 'Test4' },
    ],
  };

  render() {
    const { items } = this.state;
    return (
      <Container>
        <Button
          color="dark"
          style={{ marginBottom: '2rem' }}
          onClick={() => {
            const name = prompt('Enter Todo');
            if (name) {
              this.setState((state) => ({
                items: [...state.items, { id: uuid(), name }],
              }));
            }
          }}
        >
          Add Todo
        </Button>

        <ListGroup>
          <TransitionGroup className="todo-list">
            {items.map(({ id, name }) => (
              <CSSTransition key={id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={() => {
                      this.setState((state) => ({
                        items: state.items.filter((item) => item.id !== id),
                      }));
                    }}
                  >
                    X
                  </Button>
                  {name + ' ' + id}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

export default TodoList;
