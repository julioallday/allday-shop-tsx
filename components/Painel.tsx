import Image from "next/image";

import mulheresNoComputador from '../public/mulheres-no-computador.jpg'

import homemNoComputador from '../public/homem-no-computador.webp'

export default function Painel() {

  return (<>
    <section className="text-gray-600  body-font">
      <div className="container py-16 mx-auto lg:flex flex-nowrap">
        <div className="w-2/3  mx-auto">
          <div className="flex w-full bg-gray-100 py-32 px-10 relative mb-4">

            {/* DEVO DECODIFICAR, CONTEÚDO DA URL GIGANTE */}
            <Image
            layout={'fill'}
              alt="galeria"
              className="w-full hover:border transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:opacity-100 object-cover h-full object-center opacity-80 block absolute inset-0"
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBISEhgRFBIRERISEhEREh
                    ISERESERISGBQZGRgYGBgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHRISHzQhJCs0PTQ0
                    NDQxNDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAKgBLAMBIgACEQEDEQH
                    /xAAcAAABBQEBAQAAAAAAAAAAAAADAAIEBQYBBwj/xABBEAACAQIDBQUEBwYGAgMAAAABAgADEQQSIQUGMUFRE2
                    FxgZEHIlKhFCMyQmKx0WNygpLB8BUWc6KywuLxMzRD/8QAGgEAAwEBAQEAAAAAAAAAAAAAAAECAwQFBv/EACcRA
                    AICAgIBBAICAwAAAAAAAAABAhESIQMxEwQiMkFCUWFxUoGx/9oADAMBAAIRAxEAPwDzgR6xojxPpczOjojxGiPEn
                    MKHgRCIToizHQorxGImPMKFeK8beK8MxHpu4YvhV8F/rNclPuHpM17OkBwim44/lNmlGcHPye5nlcXC3b/l/wDSO
                    tPu+UKtPuHpJK0o8U5zOZ1R4SOlHw9IzEqEFyQo4km1hJoW2s8r9oG/Sq/Y0DmKG+YaKx6jTUA3t4Xj4oy5JUi/G
                    qo12Ix+UjKygnUBsuovYc76nulJtjemlTazZ7IAzqihiba6G4GnPXl4GeTtt+s5LvUqFzrmViGJvzPSRztJ2zF2Z
                    89g1yfe8bW/u/QT0Y+np2ylwxqpbNfW3/ZnZijhDcKilVza6BjqbAch/UwmH34xDZSq4dEuFFPMGf8AltmJ8COXj
                    PP3cEkkk9L2v5wtHF5SbqGBvcNrfx6zofHCuiowjH6PZtg750aj/R62ZKq6ZimVG/mN/XW/fx3GERHUOuRlPBlsQ
                    fOfOlDaqK610QI6AKq3Upy96xFiBY+6175u6bCnvGqslahiKmEdy4Z8ofDMyhBaorG7KTcBzcixAPC3Bzen/wAdF
                    eKLdo9j+hofuj0Ea+FUfdX0Ezu7G+SYlxhq4WjibXTKb0cQvJ6THrY+6deOpsbappwPKLpicI/ogNQQfdX0EYyqB
                    oo9JNZYJ6ctS/Zk410YDe8jtU0A903sLSjVpc77G1dB+BvzEz4edil7UdXp1UF/slq8ItQSA9TQyIrsOZh2dUTQI
                    8kpUHWUFLEEd8sKFemR71we6ZSNESK9bM1uQk2m+gkbD4anUNlfU8uclHCBTYsAehMylIpSXQ8NCK0EKQ+Iescqf
                    iHqJk5GiZNotpDZpETTmPUQufvHrM2y7PFFjxGCPE9TM8ihwjxGCPEPIFDhHRonRDyBQjOGdMaYZhRycJijSY8wo2
                    26rV/of1JZTnN7HjZje09U2difqlLXDWFweN55z7O1Jwx/ffT+Iza0mYTzuf1DcmmumEfRxTzTabL2jXUjpCCqp5y
                    oVzHrUHCY+RP6L8LX2Yv2t7y1KVNcLh3sXVnxBX7S0yQEF+jENfuA5HXxR3J4m83e+uCd6VXaPaXpV8U1Oip+06KS
                    qt0CWRsttSMp0nn956vppRjGkY40OvFeNinT5AodeK8bO3h5AoeDyhFqHSxtl6+N4C8QMPIM0lKsHQBS9OpTOfIS5
                    udLPSI1B+zpqdAQeM9n3E3lfF4X64E1aRCM9rCqttHt10IPK477DwTD19FB+7oOpW5uvhrznoPs72u5rU6TkjPnRHa
                    /1iqmYoT8QspF+ItOT1FOP9FtZHrNXFMRpYSP9Kb4hBtTHUwJpqOs87ypdDjwp9mG3vxOfFcb5UA08TKXPJO8Tj6U9t
                    LBfXWVxedsZe1Giio6QZ30irW0t0kSo+k4jwyNETUMk0xICPJ1GoImy0XGxtKgN+APGd2hWzVWPeB6CE2aq3zfhlfUe
                    7sfxH85zzlujXx4S3tkhHhkeQkeGV5k5GiJivH55EV4/PIcijzBTHLBrCLOzM8qh4jhGiOEMwocDHCMEcI8xUdMYTHGM
                    JhmA0xpnTGsY8wo9I9mduwb/Uf85vaSXnn/ALL9aT/6jT0IWAnn8r97N4/FAhXBYqOXGYffPeHtGODw+bSoKdaorFC9Q
                    HKKKG41LWBPDl1m1poAxM8o2tSp0NoV6zBnelinrpQc2pM7qKitwvc5hryMriavYTVUTN9C3+FpSaxFA4dFZVCoWVchy
                    gcBYmeX3noe/G+mHxNFsJQosUYoRVZgpDK1/sW4WtrfmZ51ednFJxWzLkcW9HbxXjbxXm3kMqHXivGzt4eQKO3jhGXivD
                    yBQZW+U3mxcI1PZS40KwqJtKnWp1AdESmArEjmv272+ETBLrp1sNdB5z33EYWnh9jDDVMiWwi0rFcw7d00OUcSXOb1mX
                    Ny6X9lpWXuBxa1qYqAZblgVvmykEi1+fI+c7Ua0wns3xWKztQqC6JTDM+ZSG4Kml75hZhfmAL6zcYl9D4GefPUqNoqzy
                    veGqDi6luAIHylcakdterfEVD+0P5CRGedkZe1CCVX0iR5Gd45HhmWicjyXReVqPJmHbWUpaKRqNiPYOfwyrD3JPUkybg
                    Hy0nbu/pKlHnLKVyZslTZMV4ZXkFXhVeZuRSJivH9pIYePzyHIuzz9TCLAqYVZ05HmUEWOEYseIZBQ6dnIoZhQjGGPMGY
                    8wo4Yxo8xrQyFR6J7LW+rqD9ofyE9GQzzX2VtpUX9p/1E9M7IrznLK3Js1i9IclMXnhe9m1lxe1KwQAIgFBTzbsrgt5kt

                    5Wnuy6GfMGFrEYsMedYhv4mIP5macb22RJ7RGxiFajqeTMPnpAXlxvPhuzxLfiVX+Vj8wZU1FymbqVqyGqYy8V5yKGQh1
                    4o28UeQUOvFecivHmFD1Os9DxG8a4nBildmquy1KtQixNfQ38gSn7oToZ54o0J8v79JoaNPssGHP2qp0/iJ/6qZLloqMU
                    3Z6b7MaamlUqXJqVKgQ3toiLdbfzk+c12OUqjXtwMwnsmOYV1PBOzcfvNmB/ITa7XcimxvyMykotOQlKSnj/J4tj6t6zn
                    9o/5yM1WDrm9Rz1dz/uMEZalo1QQ1LwqPIZfWFR5LkWiejyZh3lYjyfgmFxeaQTl7UKUsVZpEfLhX79JUo8u9tLh0wdL
                    snZncA1VI0VrXIGg53HOZtXmHMnGbRpxSySZNV4QPISvCB5g5GyZLFSP7SQw8d2kmx2Y9YZJHUwyGdJwBljxBqYQQAdFF
                    Gs4HOAHTGGNar0jCWgA8mDZ4N2MiNXHC8oD0P2a7Rp0nqB2C3ZSLm2lp6fT25hTxqp/MJ82UGzEjhbnDBhwzfMycXba+x
                    N6R9J/43hidKieonzRtlAmJqBTotWplI7mIv6iFBPVvUztTAh1DqSWsc478xt8rQimnsXZYb41ld6VQfeo2NvG/wD2mdd
                    7gd0JWWobBsxyjKt72A6CDFNrhbam1vPhLWkN7YOKFemVNjyJE4KcVhiwcUkCjp6/IRCjfwhkh4MjzskJhySAOc5jKBpu
                    UPEW+YBgpboTg0rBZtLePz/9CabeCoFWjQHBEzEeQQf8W9ZlpKvUqMLlmZsqgkknXQQewi6PU/ZljaVGlVZ3VS5p2BIvw
                    Y/kUPnNTtjbNI4Z3DArY+9cWnhhZXJbMATwA0AUCygeAAHlJSbTqigcNm+qJuRYZjrmtm42vraLF1TegVXYL6QCSepJ+c
                    TVJHcCDBIiKRIDwqPIivCI0h2WmT0eSqNSxlajwqPKhySg7Q+zR4rFBqSKORJkJXkOnVJFr6DlCK8nm5XyTcmqv9GkVSS
                    JgePFSRA86HmDLsmB53PIgqTvaSR2Z4PCLUPwmSsBgb+8/kJaJRQchOlzSOWMWylU1DwWEUVPhl4qCEVBFmPApBQqGI4
                    VpfBBHZBDMMDJOtRTopMHUrVB90zXmivQQb0FPIekPIHjMo4dkva0gKhvNpVwqkWkBtlpNIzj9kS439GaqaHTnByz2xh
                    FpkFecrJdp7RDTWmWmzcQgBD6yTiMSnBNO/hImzMMHuTJpwtMGCnFPa2DhJrsjUsXdsrKmigB8oz8essMNh1JzGxawse
                    YtyHlINfDBBmGh4WPOBwGKftVBNhex9DIk8ro0j7WkyVjsNdswHjOJgri9tZZJhK7n3KNVweBVHK+trSzo7CxYH/1qnr
                    T/Wc7lKtHUoxb2UNHZpPoZIfZwReulpfLsfFLqcNW8lzf8bxPga3OhWHjSf8ASZuU/s0UYV2V2y8ALhmUX5QW8WARKqu
                    ylu0ClgvEBdL+fDylxhgUazhksLkMCpsO4zLf4u+Iqsz297gOQHICa8d3kZc2KSiFGz8NUJIqKt3drMQrBS1wLHuja20
                    MPSU9n79QAhTb3Va1g1zxtxHeBGV6QMqauEbiouJ0RlZySjREk6hTJXNykdcOxNspHiJY4eichUnheEnSCKsAqFjYToo
                    nh0gsNiezJ0vrO08YcxY84nY1QM6G0IrQLvc36xK0KHZLV4VWkNWhVeTQ0yfRfSGDyHSbSFDyGjRMlB50PIwedDyGirJ
                    Qed7SRQ87mioLLJUhVSNWFWMDq04VUnFhFEkDqpHCnOqIVYBQPspzsocCOtAKIhoRjYW8mlZO2Tg89RXdA1JX9+5sGIF
                    wvfyvGtg9FYm4lfFBXulOm3vBnOuXqEGv5S9w3spwpGV8S7MedNEQD1vLlcawzgfeNr9F6CSGx7XXKbWW06FSMJJtlQn
                    svwtOm4SvXNQ/YL5MqnvUAXHnM3X3CxlEl37J15FKij1DWM2TVnYk5m142JEQpZjdiW72JJibTGoyX2YTaG5tVwoFSko
                    NicpZyo8ha/nLXZe62HoMG7M1HFvfqe8bjmBwBmsKidsIk9UOt2ApZuoHk0mUlPxD0gwg744Ul5wAmL4rEX71/mEirRA
                    4XHgY7sz8R84mUC2hRSqhpuKbowKlTY6EWOvEeUwLeztO0zJijTTNoHp9plHS4YX9J6JYxrQtoTSZmX9ntFl93HoWvb3
                    qVgf915MwHsroj3mxjuDypoij1YmWbIp5SdgMc1MZeK9/KVGSTIlFtdlRifZdhWAAxGJU8z9Ubjwy6Slx3stqID9Hrip
                    7rHLVXs2J5BStwb+U9BXH31H5wlPH8pbaZKTR8x47AVaVRqb03R1azI6lWXxH9YZNlFgCDxnvm9ewaG0KZVmVK1O7Uqu
                    UEgc1bqh5jwPGeNYXmLjQkaG4000POTKTRcYp9lW+yrLodZXOhU2M1bJK3H4O+o4yYz/Y3FfRTgxwaNZSDaIGWSTabaR
                    4eRleOzyGi0yRnnQ8jZ4s8mgslZ53NI2adzwoLNUqiFVRBrTPWFVD1mRoPVRCIgg1Q9YVUPWAwqqI9VEYqd8IqHrAB4U
                    ToURBO+LKYAdWlmIUc+fQczLuk+iqAFVFyqBpxOpPUyrwdM3zHppLOlwmkVoh7DLCrAKYZZQgqiEEakIogBwCPVJ0LOw
                    A6BHCNvFmgAQGcJjLzt4AdJjWiJjGMAORCNzToiAKjER3aGMEUYBKlQG2gOmUg/ZZToQRMtvRuxhloticPSOHKG9SmpJ
                    psl7FlB+yVPG2lrzSGFq1iy9m1mXKQVI4grYg9bgn1isVHkFmXvEfdW/SS6mHC1KlEn3qTsuvEpxRvNSp84OpgxJsuij
                    2jg7+8BKaa2phTbQ+RlPidllveXnxHfNIyX2RKLKwNO54c7PccjF9AfoZVxFTAZ4s8P8AQX6RfQm6RXEKYEPO5oZcE8m
                    Jg0tqusTaQKLNErwivAqsIomBqFV4ZXgFEeqwGSFeFV5HVY9VgBIDiFoZSbtmyjiVGvhIoWTnZQgReWrHq0qKsUnQ9Kt
                    
                    7d2g8BJlFrjzkBDaS6L6ec0IJKw6QCWh1MACqYVTAKYQPaAEgR1oBagMIGgA6IxB528AGmNJj5wiFgNzThM6Ug2UwARM
                    cpgC8QeAEsGdkdK45kesOjq3Ag+BEAOwbtYwrCRXqa6xDPOt9mOGx61h9itTUt3spKH0AWSqdRXUMpuCLiX29G7LbQok
                    0z9fh1epTTlUU2zr3H3VtMDu3iSrdi9wD9m+lj0MclcbQoyqTTL5wJBRgrFDwOq/pLiphQBcmwHM8JW1cMahGQHKCDmP
                    E+AmZowbqIJhLJsGehgHwh6GSBBMExkmpQYfdMAyH4T6GAAyZzNOlG+E+hnMjfCfQwA0oop0hFpJ0mM/zVV+BPnO/5rq
                    /Anzm/jZjmjaimnSOyp0mMXeypf8A+NPUyWN4qhFwiHzMlxrspSvo1Qy/DHAr0mPpbz1CbdmnqY+pvLUAvkTTlcwxCzV
                    uy20EzuK249OqygKyLYcwb211kelvHUZSwRbjlcynNbOS/NiWI6Em9o0hNmpw28NNvtkoejcPWWKbRV0bI6sRcgAgzBs
                    LweQg5lJU9VJB+Uqgs9PwFUFQQTqAZZI/fMVuzjmZCjODUVjYNYFlPTrzmqoVCeMVBZZo8KrSLSvDopgMeyCN94cDDKs
                    cAIgAZz0jhWPQw2k5mEAGDEdxjxiB0PpEWHSNJPwwAd2y9/oZw10+IecEwJ4hvAKZFxlTIpcoAB96o6IPmYAS2dD95P5
                    gILMnVD/GJhNqbfqMxVDTVeBKrf8A3GVeENWvXSnnYXa5qFiQqAXJB5HTSFAeoK6dU9QYmpqeWvUaH1gqVRuiN52hjVF
                    vsAeekAOUcaVbI5vpdW6r3+EbVfU+JlHiK5bE34dmMo776n++6WtRufcIAETEOjBkbK3XxmSx+7tOm7u9RswdnYiwuxO
                    a48bzSZpiN/8AHVUxC5XZVampyi1sysRf8o430hSqrZqMLhzUs9XVQBkpngB1bqZPAUcFA8p5Gdu4o/8A71PURw2viTp
                    21Q3tzg4MSmmerOR0EEzDoPlPOdoY+qiqO0fMeJzG8hUNpVL3ao7acM5kqNqy3LdHprsO75QLMv4flMFisS5p5s7DMR9
                    43kalVcKWLOf4jBLQHoDuvVflB9qvVfUTzitima2pFvxGBznqfUy1AhzGRRRTUwFLTZyDKWPMxRTPk+Jpx/IBhz9Zblr
                    FjUym/WKKL8kW+mP2S/vFT94fOdf3GZe+/lFFB/IUfiFVo6KKMZ0Swwe1KlMWViwHxM5t84oogLjB72VF+0p/hYH5Ef1
                    lkm+S21DedNf6NFFEUPTfFT90DxT/AMo//OC/Cp8mX9YoogF/nJPg+c4d9F5Ux5sf0iigA198m5Ig/mMjVd8Kh4FV/dT
                    X5mKKAFZjN4a7j3atQHxCj0EqMU9RzmeozniM5Nh+npFFACK1RgLFTb4gwsI/DllIdNGBuG7RwQfIRRRgaTYm8ddKgFc
                    rUpMbMdA6fiUgD0M2+IrIouSw/hv6RRRIDNqxz5zxLX+ctWxOYRRQAHn/AL6TzjezaS4jEZkN0RQinkbEkkd1zFFKgtk
                    cnRRiWGzKWZweS6xRSp9MXGD2pVzVCOS6frBYdbkDqYoofiH5MmbUa2VfP+kdXXJTvxDC3qIopmuolvtlVORRTYxP/9k
                    ="

            />
            <div className="text-center relative z-10 w-full">
              <h2 className="text-2xl text-amber-500 font-medium title-font mb-2">
              </h2>
              <p className="leading-relaxed text-white hover:text-zinc-500 hover:font-bold">
              </p>
              <a className="mt-3 text-3xl text-white hover:text-zinc-500 hover:font-bold inline-flex items-center">
              </a>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center flex-wrap -mx-2">
            <div className="px-2 w-full sm:w-1/2">
              <div className="flex flex-wrap bg-gray-100 sm:py-24 py-16  px-6 relative">
                <Image
                layout="fill"
                  alt="galeria"
                  className="md:w-full object-cover h-full object-center opacity-80 block absolute inset-0 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:opacity-100 hover:border"
                  src={mulheresNoComputador}
                />
                <div className="text-center relative z-10 w-full">
                  <h2 className="text-xl text-white  hover:text-zinc-500 hover:font-bold title-font mb-2">
                  </h2>
                  <p className="leading-relaxed">
                  </p>
                </div>
              </div>
            </div>
            <div className="px-2 py-5 w-full sm:w-1/2 ">
              <div className="flex flex-wrap  w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                <Image
                layout="fill"
                  alt="galeria"
                  className="w-full object-cover h-full object-center block opacity-80 absolute inset-0 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:opacity-100 hover:border"
                  src={homemNoComputador}
                />
                <div className="text-center relative z-10 w-full">
                  <h2 className="text-xl text-gray-900 font-medium title-font mb-2">
                  </h2>
                  <p className="leading-relaxed">
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>)
}