import { useEffect, useRef } from 'react';
import './App.css';
import { Div, Textarea } from './components/Components';
import { CalculateSum, ListValues } from './scripts/scripts';

export function App() {

  const app = useRef<HTMLDivElement>(null);
  const input = useRef<HTMLTextAreaElement>(null);
  const output = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const handleResize = () => {
      const isPortrait = window.innerHeight > window.innerWidth;
      if(app.current) {
        app.current.style.flexDirection = isPortrait ? 'column' : 'row';
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const inputOnChange = () => {
    try {
      if(output.current && input.current) {
        output.current.value = `Dívida total: ${CalculateSum(ListValues(input.current.value)).toFixed(2)}`;
      }
    } catch (error) {
      if(output.current) {
        output.current.value = `Erro: ${error instanceof Error ? error.message : String(error)}`;
      }
    }
  }
  
  return (
    <Div 
      ref={app}
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