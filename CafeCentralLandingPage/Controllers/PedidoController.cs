using Microsoft.AspNetCore.Mvc;

public class PedidoController : Controller
{
    [HttpGet]
    public IActionResult Index()
    {
        return View();
    }

    [HttpPost]
    public IActionResult EnviarPedido(string tipoPedido, string nomeCliente, string telefone, string detalhesPedido)
    {
        string mensagem = $"Olá, sou {nomeCliente}, gostaria de encomendar {tipoPedido}. {detalhesPedido}";
        string linkWhatsapp = $"https://api.whatsapp.com/send?phone=SEUNUMERO&text={Uri.EscapeDataString(mensagem)}";
        
        return Redirect(linkWhatsapp);
    }
}