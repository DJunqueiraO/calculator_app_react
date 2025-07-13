import { useRef } from 'react';
import './App.css';
import { Div, Textarea } from './components/Components';
import { CalculateSum, ListValues } from './scripts/scripts';

export function App() {

  const input = useRef<HTMLTextAreaElement>(null);
  const output = useRef<HTMLTextAreaElement>(null);

  const inputOnChange = () => {
    try {
      if(output.current && input.current) {
        const listValues = ListValues(input.current.value)

        console.log(CalculateSum(listValues));
        
        output.current.value = `${CalculateSum(listValues)[1]}\n\nTotal: ${CalculateSum(listValues)[0].toFixed(2)}`;
      }
    } catch (error) {
      if(output.current) {
        output.current.value = `Erro: ${error instanceof Error ? error.message : String(error)}`;
      }
    }
  }
  
  return (
    <Div 
      className="app">
      <Textarea 
        ref={input}
        onChange={inputOnChange}
        id='input'
        placeholder='Insira aqui o extrato para ser calculado'/>
      <Textarea 
        ref={output}
        id='output'
        placeholder='Resultado'/>
    </Div>
  );
}