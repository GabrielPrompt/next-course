const ClothesPage = ({ params }) => {
  const clothes = params.clothes

  return (
    <div>
      <h1>Roupa: {clothes}</h1>
    </div>
  )
}

export default ClothesPage
