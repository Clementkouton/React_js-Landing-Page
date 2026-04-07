import Container from "../Container"

const Headings = ({title, subtitle}) => {
  return (
    <Container className={" pt-10 lg:pt-20 lg:pb-3 "}>
      <div className=" caption-1 text-n-3 text-center uppercase">
          {title}
      </div>
      <h2 className=" h2 text-n-3 text-center uppercase">{subtitle}</h2>
    </Container>
  )
}

export default Headings;