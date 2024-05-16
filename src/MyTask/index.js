import {Component} from 'react'
import {v4} from 'uuid'

import {
  MainContainer,
  LeftContainer,
  RightContainer,
  HeadElement,
  Form,
  Label,
  Input,
  Div,
  Select,
  Option,
  Button,
  UnordeTagsList,
  UnorderedTaskSlist,
  ListTaskSlist,
  Para,
} from './Css'

class MyTask extends Component {
  state = {
    inputText: '',
    activeTag: '',
    activeOption: this.props.tagsList[0].displayText,
    taskList: [],
    updatedTaskList: [],
  }

  onClickToSubmitFoem = event => {
    const {inputText, activeOption} = this.state
    event.preventDefault()

    const newtaskObject = {
      id: v4(),
      taskName: inputText,
      activeOption,
    }

    this.setState(prevState => ({
      updatedTaskList: [...prevState.updatedTaskList, newtaskObject],
    }))
    this.setState(prevState => ({
      taskList: [...prevState.taskList, newtaskObject],
    }))
    this.setState({
      inputText: '',
      activeOption: this.props.tagsList[0].displayText,
    })
  }

  onChangeInputText = event => {
    this.setState({inputText: event.target.value})
  }

  onChangeToOptions = event => {
    this.setState({activeOption: event.target.value})
  }

  getNewList = () => {
    const {activeTag, taskList} = this.state
    const newList = taskList.filter(each => each.activeOption === activeTag)
    this.setState({updatedTaskList: newList})
  }

  getexistingList = () => {
    const {taskList} = this.state
    this.setState({updatedTaskList: taskList})
  }

  selectOptionId = selectedTag => {
    const {activeTag} = this.state

    if (activeTag === selectedTag) {
      this.setState({activeTag: ''}, this.getexistingList)
    } else {
      this.setState({activeTag: selectedTag}, this.getNewList)
    }
  }

  renderZeroListView = () => {
    return (
      <Div row>
        <Para color="#f1f5f9">No Tasks Added Yet</Para>
      </Div>
    )
  }

  renderTaskslistView = () => {
    const {updatedTaskList} = this.state

    return (
      <UnorderedTaskSlist>
        {updatedTaskList.map(each => {
          return (
            <ListTaskSlist key={each.id}>
              <Para>{each.taskName}</Para>
              <Para tag>{each.activeOption}</Para>
            </ListTaskSlist>
          )
        })}
      </UnorderedTaskSlist>
    )
  }

  render() {
    const {tagsList} = this.props
    const {inputText, activeOption, updatedTaskList, activeTag, taskList} =
      this.state

    return (
      <MainContainer>
        <LeftContainer>
          <HeadElement center="center" color="#f3aa4e">
            Create a task!
          </HeadElement>
          <Form onSubmit={this.onClickToSubmitFoem}>
            <Div>
              <Label htmlFor="text">Task</Label>
              <Input
                id="text"
                onChange={this.onChangeInputText}
                value={inputText}
                type="text"
                placeholder="Enter the task here"
              />
            </Div>
            <Div>
              <Label htmlFor="Tags">Tags</Label>
              <Select
                id="Tags"
                value={activeOption}
                onChange={this.onChangeToOptions}
              >
                {tagsList.map(each => {
                  return (
                    <option key={each.optionId} value={each.optionId}>
                      {each.displayText}
                    </option>
                  )
                })}
              </Select>
            </Div>
            <HeadElement center="center">
              <Button
                padding="8px"
                brRadius="4px"
                bgColor="#f3aa4e"
                type="submit"
              >
                Add Task
              </Button>
            </HeadElement>
          </Form>
        </LeftContainer>
        <RightContainer>
          <HeadElement color="#ffffff">Tags</HeadElement>
          <UnordeTagsList>
            {tagsList.map(each => {
              const getId = () => {
                this.selectOptionId(each.displayText)
              }

              return (
                <li key={each.optionId}>
                  <Button
                    isActive={activeTag === each.displayText}
                    onClick={getId}
                    padding="6px"
                    brRadius="15px"
                    bgColor="transparent"
                    border
                  >
                    {each.displayText}
                  </Button>
                </li>
              )
            })}
          </UnordeTagsList>
          <HeadElement color="#ffffff">Tasks</HeadElement>
          {updatedTaskList.length === 0
            ? this.renderZeroListView()
            : this.renderTaskslistView()}
        </RightContainer>
      </MainContainer>
    )
  }
}

export default MyTask
