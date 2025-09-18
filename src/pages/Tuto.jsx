import { Navegacao } from "../components/Navegacao"

export function Tuto() {
  return (
    <main className="bg-amarelo-claro dark:bg-vinho-dois min-h-screen">
      <Navegacao />

      
      <h1 className="font-erica text-vinho-um text-4xl sm:text-6xl md:text-7xl flex justify-center text-center mt-6 md:mt-12 mb-12 px-4 dark:text-amarelo">
        Como utilizar o Dose Drop
      </h1>
 
      <div className="flex justify-center mb-12 px-4">
        <div className="w-full max-w-4xl aspect-video rounded-xl md:rounded-2xl shadow-lg border-4 border-vinho-um overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/xxxxxxx"
            title="Tutorial Dose Drop"
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <section className="bg-amarelo italic text-vermelho text-lg sm:text-xl md:text-2xl mx-auto max-w-2xl flex flex-col items-start font-semibold shadow-lg rounded-xl md:rounded-2xl dark:text-amarelo dark:bg-vermelho p-8 space-y-6 leading-relaxed">
        <p>
          Será possível programar horários específicos pelo aplicativo. No visor
          de LCD, aparecerá o horário agendado, a depender do tipo de remédio
          colocado e da quantidade que o usuário deve tomar.
        </p>

        <p>
          O visor também mostrará o último horário em que o remédio foi
          disponibilizado.
        </p>

        <p>
          Quando chegar o horário agendado, um alarme será disparado tanto na
          caixa quanto no celular do usuário.
        </p>

        <p>
          Haverá um botão que deverá ser pressionado para liberar o remédio no
          momento certo.
        </p>

        <p>
          O dispositivo contará com dois compartimentos separados. O usuário
          deverá colocar os remédios nos compartimentos do robô. Cada
          compartimento tem capacidade para armazenar até 30 comprimidos.
        </p>

        <p>
          O produto acompanha duas baterias recarregáveis: uma para uso no robô
          e outra reserva, que poderá ser usada quando a bateria principal
          estiver descarregada.
        </p>

        <p>
          O dispositivo possui um botão de ligar e desligar, além do botão para
          liberação dos comprimidos.
        </p>

        <p>(Observação: O manual do produto poderá sofrer alterações.)</p>
      </section>
    </main>
  )
}