import { Link } from "react-router"
import { Navegacao } from "../components/Navegacao"

export function Tuto () {
    return(
        <main className="bg-amarelo-claro dark:bg-vinho-dois">
         <section>
           <div>
              <Navegacao />
                <h1 className="font-erica text-vinho-um text-7xl flex justify-center mt-10 mb-1 dark:text-amarelo">Como utilizar o Dose Drop</h1>
                  <div className="flex items-center justify-center h-screen">
                    <iframe
                    src="https://www.youtube.com/embed/xxxxxxx"
                    className="w-[750px] h-[500px] rounded-2xl shadow-lg border-4 mb-50 border-vinho-um  "></iframe>
                  </div>
                  <div className="bg-amarelo italic text-vermelho text-2xl mt-[-200px] mx-auto w-[800px] flex flex-col items-center font-semibold rounded-4xl dark:text-amarelo dark:bg-vermelho p-8 space-y-4">
                     <p>Será possível programar horários específicos pelo aplicativo. No visor de LCD, aparecerá o horário agendado, a depender do tipo de remédio colocado e da quantidade que o usuário deve tomar.</p>

                    <p>O visor também mostrará o último horário em que o remédio foi disponibilizado.</p>

                    <p>Quando chegar o horário agendado, um alarme será disparado tanto na caixa quanto no celular do usuário.</p>

                    <p>Haverá um botão que deverá ser pressionado para liberar o remédio no momento certo.</p>

                     <p>O dispositivo contará com dois compartimentos separados. O usuário deverá colocar os remédios nos compartimentos do robô. Cada compartimento tem capacidade para armazenar até 30 comprimidos.</p>

                   <p>O produto acompanha duas baterias recarregáveis: uma para uso no robô e outra reserva, que poderá ser usada quando a bateria principal estiver descarregada.</p>

                   <p>O dispositivo possui um botão de ligar e desligar, além do botão para liberação dos comprimidos.</p>

                <p>(Observação: O manual do produto poderá sofrer alterações.)</p>
                </div>

           </div>
         </section>
      </main>   
    )
}