"use client"

import { useState } from "react"

export function Calculator() {
  const [display, setDisplay] = useState("0")
  const [previousValue, setPreviousValue] = useState<number | null>(null)
  const [operation, setOperation] = useState<string | null>(null)
  const [waitingForOperand, setWaitingForOperand] = useState(false)

  const inputDigit = (digit: string) => {
    if (waitingForOperand) {
      setDisplay(digit)
      setWaitingForOperand(false)
    } else {
      setDisplay(display === "0" ? digit : display + digit)
    }
  }

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay("0.")
      setWaitingForOperand(false)
      return
    }

    if (!display.includes(".")) {
      setDisplay(display + ".")
    }
  }

  const clear = () => {
    setDisplay("0")
    setPreviousValue(null)
    setOperation(null)
    setWaitingForOperand(false)
  }

  const toggleSign = () => {
    const value = parseFloat(display)
    setDisplay(String(value * -1))
  }

  const inputPercent = () => {
    const value = parseFloat(display)
    setDisplay(String(value / 100))
  }

  const performOperation = (nextOperation: string) => {
    const inputValue = parseFloat(display)

    if (previousValue === null) {
      setPreviousValue(inputValue)
    } else if (operation) {
      const currentValue = previousValue || 0
      let result: number

      switch (operation) {
        case "+":
          result = currentValue + inputValue
          break
        case "-":
          result = currentValue - inputValue
          break
        case "×":
          result = currentValue * inputValue
          break
        case "÷":
          result = inputValue !== 0 ? currentValue / inputValue : 0
          break
        default:
          result = inputValue
      }

      setDisplay(String(result))
      setPreviousValue(result)
    }

    setWaitingForOperand(true)
    setOperation(nextOperation)
  }

  const calculate = () => {
    if (!operation || previousValue === null) return

    const inputValue = parseFloat(display)
    let result: number

    switch (operation) {
      case "+":
        result = previousValue + inputValue
        break
      case "-":
        result = previousValue - inputValue
        break
      case "×":
        result = previousValue * inputValue
        break
      case "÷":
        result = inputValue !== 0 ? previousValue / inputValue : 0
        break
      default:
        result = inputValue
    }

    setDisplay(String(result))
    setPreviousValue(null)
    setOperation(null)
    setWaitingForOperand(true)
  }

  const buttons = [
    { label: "AC", action: clear, className: "bg-zinc-700 hover:bg-zinc-600 text-white" },
    { label: "±", action: toggleSign, className: "bg-zinc-700 hover:bg-zinc-600 text-white" },
    { label: "%", action: inputPercent, className: "bg-zinc-700 hover:bg-zinc-600 text-white" },
    { label: "÷", action: () => performOperation("÷"), className: "bg-amber-500 hover:bg-amber-400 text-white" },
    { label: "7", action: () => inputDigit("7"), className: "bg-zinc-800 hover:bg-zinc-700 text-white" },
    { label: "8", action: () => inputDigit("8"), className: "bg-zinc-800 hover:bg-zinc-700 text-white" },
    { label: "9", action: () => inputDigit("9"), className: "bg-zinc-800 hover:bg-zinc-700 text-white" },
    { label: "×", action: () => performOperation("×"), className: "bg-amber-500 hover:bg-amber-400 text-white" },
    { label: "4", action: () => inputDigit("4"), className: "bg-zinc-800 hover:bg-zinc-700 text-white" },
    { label: "5", action: () => inputDigit("5"), className: "bg-zinc-800 hover:bg-zinc-700 text-white" },
    { label: "6", action: () => inputDigit("6"), className: "bg-zinc-800 hover:bg-zinc-700 text-white" },
    { label: "-", action: () => performOperation("-"), className: "bg-amber-500 hover:bg-amber-400 text-white" },
    { label: "1", action: () => inputDigit("1"), className: "bg-zinc-800 hover:bg-zinc-700 text-white" },
    { label: "2", action: () => inputDigit("2"), className: "bg-zinc-800 hover:bg-zinc-700 text-white" },
    { label: "3", action: () => inputDigit("3"), className: "bg-zinc-800 hover:bg-zinc-700 text-white" },
    { label: "+", action: () => performOperation("+"), className: "bg-amber-500 hover:bg-amber-400 text-white" },
    { label: "0", action: () => inputDigit("0"), className: "col-span-2 bg-zinc-800 hover:bg-zinc-700 text-white" },
    { label: ".", action: inputDecimal, className: "bg-zinc-800 hover:bg-zinc-700 text-white" },
    { label: "=", action: calculate, className: "bg-amber-500 hover:bg-amber-400 text-white" },
  ]

  return (
    <div className="w-full max-w-xs mx-auto">
      <div className="bg-zinc-900 rounded-3xl p-4 shadow-2xl border border-zinc-800">
        {/* Display */}
        <div className="bg-zinc-950 rounded-xl p-4 mb-4">
          <div className="text-right text-5xl font-light text-white tracking-tight overflow-hidden">
            {display.length > 9 ? parseFloat(display).toExponential(4) : display}
          </div>
          {operation && previousValue !== null && (
            <div className="text-right text-sm text-zinc-500 mt-1">
              {previousValue} {operation}
            </div>
          )}
        </div>

        {/* Buttons Grid */}
        <div className="grid grid-cols-4 gap-2">
          {buttons.map((button, index) => (
            <button
              key={index}
              onClick={button.action}
              className={`${button.className} ${
                button.label === "0" ? "col-span-2" : ""
              } h-16 rounded-xl text-2xl font-medium transition-all duration-150 active:scale-95 focus:outline-none focus:ring-2 focus:ring-amber-500/50`}
            >
              {button.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
