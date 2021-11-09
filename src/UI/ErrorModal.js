import Button from "./Button";
import Card from "./Card";

import classes from "./ErrorModal.module.css";

const ErrorModal = ({ title, message, onCloseModal }) => {
  const handleClick = () => {
    onCloseModal();
  };
  return (
    <>
      <div className={classes.backdrop} onClick={handleClick}></div>
      <Card className={classes.modal}>
        <div className={classes.header}>
          <h2>{title}</h2>
        </div>
        <div className={classes.content}>
          <p>{message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={handleClick}>Okay</Button>
        </footer>
      </Card>
    </>
  );
};

export default ErrorModal;
