function status(request, response) {
  //response.status(200).send("são acima da média");
  response.status(200).json({ chave: "são acima da média" });
}

export default status;
