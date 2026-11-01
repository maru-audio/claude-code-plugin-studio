import { formatControlValue } from "maruaudio/ui/control-format"
import { useRef, type CSSProperties } from "react"
import type { AudioModuleFaceProps } from "maruaudio/contracts"
import {
  FaceModuleNavbar,
  faceParamBinding,
  isFaceModulePowered,
  useFaceParamEditGesture,
} from "maruaudio/ui/module-face-controls"
import { FaderHeadless } from "maruaudio/ui/fader-headless"
import { factoryPresets } from "../factory-bank"
import "./styles.css"

function WorkcardFader({
  face,
  path,
}: {
  face: AudioModuleFaceProps
  path: string
}) {
  const binding = faceParamBinding(face, path)
  const descriptor = face.params.find((param) => param.path === path)!
  const edit = useFaceParamEditGesture(face)
  const latest = useRef(binding.value)
  latest.current = binding.value
  const format = (value: number) =>
    path === "drive"
      ? formatControlValue(value * 100, "%")
      : formatControlValue(value, "Hz")
  const end = () => edit.end(path, latest.current)
  return (
    <section
      className="slate-workcard__row"
      data-stage={path}
      data-audio-probe-control={path === "drive" ? "true" : undefined}
    >
      <div className="slate-workcard__label">
        <span>{path === "drive" ? "01 / SHAPER" : "02 / FILTER"}</span>
        <h2>{descriptor.label}</h2>
      </div>
      <div className="slate-workcard__fader-group">
        <FaderHeadless
          className="slate-workcard__fader"
          path={path}
          aria-label={descriptor.label}
          valueRaw={binding.value}
          valueMin={binding.min}
          valueMax={binding.max}
          step={binding.step}
          orientation="horizontal"
          capInset={20}
          valueRawDisplayFn={format}
          ccRange={{
            min: binding.min,
            max: binding.max,
            unit: descriptor.units,
          }}
          ccFrameAs="div"
          ccFrameStyle={{ display: "block", width: "100%" }}
          onValueRawChange={(value) => {
            latest.current = value
            edit.change(path, value)
          }}
          onGestureEnd={end}
          onKeyUp={end}
          onBlur={end}
          onDoubleClick={() => {
            latest.current = binding.defaultValue
            edit.change(path, binding.defaultValue)
            end()
          }}
        >
          {({ value01 }) => (
            <div
              className="slate-workcard__rail"
              style={{ "--position": value01 } as CSSProperties}
            >
              <span className="slate-workcard__fill" />
              <span className="slate-workcard__cap" />
            </div>
          )}
        </FaderHeadless>
        <div className="slate-workcard__endpoints" aria-hidden="true">
          <span>{path === "drive" ? binding.min : `${binding.min} Hz`}</span>
          <span>
            {path === "drive" ? binding.max : `${binding.max / 1000} kHz`}
          </span>
        </div>
      </div>
      <output
        className="slate-workcard__value"
        aria-label={`${descriptor.label} value`}
      >
        {format(binding.value)}
      </output>
    </section>
  )
}

/** Two real Processor controls; the footer is a parameter-derived signal model. */
export function SdkProcessorEffectFace(face: AudioModuleFaceProps) {
  const drive = faceParamBinding(face, "drive")
  const tone = faceParamBinding(face, "tone")
  return (
    <main
      className="slate-workcard"
      data-module-powered={isFaceModulePowered(face)}
    >
      <FaceModuleNavbar
        face={face}
        fallbackPresets={factoryPresets}
        brand={"Claude Code Plugin Studio"}
        subtitle="Drive → Tone"
        className="slate-workcard__navbar"
        unstyled
        tone="inherit"
        showStatus={false}
        powerButton={{ tone: "dark", accent: "#9fdcdf" }}
      />
      <div className="slate-workcard__controls">
        <WorkcardFader face={face} path="drive" />
        <WorkcardFader face={face} path="tone" />
      </div>
      <footer className="slate-workcard__model">
        <div className="slate-workcard__model-heading">
          <h2>Signal model</h2>
          <span>Parameter-derived · no measurement</span>
        </div>
        <div
          className="slate-workcard__flow"
          aria-label="Audio input, bounded rational soft drive, one-pole low-pass, audio output"
        >
          <span>Audio input</span>
          <span aria-hidden="true">→</span>
          <div data-stage="drive">
            Rational soft drive
            <small>k = {(drive.value * 40).toFixed(2)}</small>
          </div>
          <span aria-hidden="true">→</span>
          <div data-stage="tone">
            One-pole low-pass
            <small>{Number(tone.value.toFixed(2))} Hz cutoff</small>
          </div>
          <span aria-hidden="true">→</span>
          <span>Audio output</span>
        </div>
      </footer>
    </main>
  )
}

export default SdkProcessorEffectFace
