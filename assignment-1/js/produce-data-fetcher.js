async function fetchProduceData(url) {
    let produceStore = []
    const response = await fetch(url)
    produceStore = [... await response.json()]

    return produceStore
  }

export { fetchProduceData }