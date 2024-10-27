function falhar(msg: string): never {
	throw new Error(msg)
}

falhar("retornando um erro com essa msg personalisada")
