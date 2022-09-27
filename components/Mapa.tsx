export default function Mapa() {

    return (<>
        <iframe
            className="w-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7938.271809216513!2d-43.39853356583399!3d-22.91622623887911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd8c49ac7ebf3%3A0x1cb85ee69fd3159e!2sAv.%20dos%20Mananciais%2C%201501%20-%20Taquara%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2022720-400!5e0!3m2!1spt-BR!2sbr!4v1664286153423!5m2!1spt-BR!2sbr"
            width={800}
            height={600}
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        />

    </>)
}