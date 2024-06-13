import { IInputs, IOutputs } from './generated/ManifestTypes';

export class myGlowText implements ComponentFramework.StandardControl<IInputs, IOutputs> {
  // Properties defined here

  private glowingText: HTMLElement;

  // Constructor implementation
  constructor() {}

  public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container: HTMLDivElement): void {
    // Add control initialization code

    this.glowingText = document.createElement('div');
    if (context.parameters.glowText.raw) {
      this.glowingText.innerHTML = context.parameters.glowText.raw;
    }
    if (context.parameters.glowText2.raw) {
      this.glowingText.innerHTML = context.parameters.glowText2.raw;
    }
    if (context.parameters.textColor.raw) {
      this.glowingText.style.color = context.parameters.textColor.raw;
    }
    if (context.parameters.textSize.raw) {
      this.glowingText.style.fontSize = context.parameters.textSize.raw + 'px';
    }
    if (context.parameters.textWeight.raw) {
      this.glowingText.style.fontWeight = context.parameters.textWeight.raw;
    }
    if (context.parameters.textAlign.raw) {
      this.glowingText.style.textAlign = context.parameters.textAlign.raw;
    }

    this.glowingText.classList.add('glow');
    container.appendChild(this.glowingText);
  }

  public updateView(context: ComponentFramework.Context<IInputs>): void {
    // Add code to update control view
    if (context.parameters.glowText.raw) {
      this.glowingText.innerHTML = context.parameters.glowText.raw + ' ' + context.parameters.glowText2.raw;
    }

    if (context.parameters.textColor.raw) {
      this.glowingText.style.color = context.parameters.textColor.raw;
    }
    if (context.parameters.textSize.raw) {
      this.glowingText.style.fontSize = context.parameters.textSize.raw + 'px';
    }
    if (context.parameters.textWeight.raw) {
      this.glowingText.style.fontWeight = context.parameters.textWeight.raw;
    }
    if (context.parameters.textAlign.raw) {
      this.glowingText.style.textAlign = context.parameters.textAlign.raw;
    }
  }

  public getOutputs(): IOutputs {
    return {};
  }

  public destroy(): void {
    // Add code to cleanup control if necessary
  }
}
