const handleOnClick = (e, obj) => {

    // extract the letter of button that is clicked
    const ltr = e.target.value;

    // set the state
    obj.setState(prevState => ({

      guessed: prevState.guessed.add(ltr),
      nWrong: prevState.nWrong + (prevState.answer.includes(ltr) ? 0 : 1)

    }));

}

export default handleOnClick;