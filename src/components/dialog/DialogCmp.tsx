import * as React from 'react';
import './DialogCmp.css';

interface IProps {
  title?: string;
  children?: any;
  [attrs: string]: any;
}

export default class Dialog extends React.PureComponent<IProps, {}> {

  private dialogContainer: HTMLDivElement;
  private static cssClassOpen = 'scale-up';
  private static cssClassClosed = 'scale-out-vertical';

  public componentDidMount() {
    const parentElement = this.dialogContainer && this.dialogContainer.parentElement as HTMLElement;
    parentElement && parentElement.addEventListener('click', () => {
      this.hide(); // Hide dialog when click outside
    });
  }

  public hide() {
    this.dialogContainer.classList.remove(Dialog.cssClassOpen);
    this.dialogContainer.classList.add(Dialog.cssClassClosed);
  }

  public show() {
    this.dialogContainer.style.display = 'block';
    this.dialogContainer.classList.remove(Dialog.cssClassClosed);
    this.dialogContainer.classList.add(Dialog.cssClassOpen);
  }

  public render() {
    let classDialogContent = 'dialogContent ' + Dialog.cssClassOpen;
    return (
      <div ref={ (dialogContainer: HTMLDivElement) => this.dialogContainer = dialogContainer }
        className="dialogContainer">
          <div className={ classDialogContent }>
            <div className="dialog-title">{ this.props.title }</div>
            { this.props.children }
          </div>
      </div>
    )
  }
}