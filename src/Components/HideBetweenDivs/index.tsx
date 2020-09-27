import React from 'react'

interface Props {
  children: React.ReactNode
  inverse: Boolean
  startDivID: String
  endDivID: String
  startDivOffset: Number
  endDivOffset: Number
}

interface State {
  show: Boolean
}

class HideBetweenDivs extends React.Component<Props, State> {
  state = {
    show: false
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll)
  }

  listenToScroll = () => {
    function offset(el: HTMLElement) {
      let rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }

    let gameDiv = document.querySelector(
      `#${this.props.startDivID}`
    ) as HTMLElement
    let gameDivOffset = offset(gameDiv)

    let featuredDiv = document.querySelector(
      `#${this.props.endDivID}`
    ) as HTMLElement
    let featuredDivOffset = offset(featuredDiv)

    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop

    if (winScroll >= gameDivOffset.top && winScroll <= featuredDivOffset.top) {
      this.setState({
        show: true
      })
    } else {
      this.setState({
        show: false
      })
    }
  }

  render() {
    return <>{this.props.children}</>
  }
}

export default HideBetweenDivs
