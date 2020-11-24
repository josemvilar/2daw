<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* user_welcome.txt */
class __TwigTemplate_ff991bb8edf3979f4e35bfab4504d3a0444fedcc113e002ad98ab837e108ce12 extends \Twig\Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 1
        echo "Subject: Bienvenido a \"";
        echo ($context["SITENAME"] ?? null);
        echo "\" - ";
        echo ($context["U_BOARD"] ?? null);
        echo "

";
        // line 3
        echo ($context["WELCOME_MSG"] ?? null);
        echo "

Por favor, guarda este email para futuras referencias. La información de tu cuenta es la siguiente:

----------------------------
Nombre de usuario: ";
        // line 8
        echo ($context["USERNAME"] ?? null);
        echo "

URL del Sitio: ";
        // line 10
        echo ($context["U_BOARD"] ?? null);
        echo "
----------------------------

Tu clave ha sido encriptada en nuestra base de datos. Si la olvidaste podrás solicitar una nueva la cuál será activada en la misma forma que esta cuenta.

Gracias por registrarse.

";
        // line 17
        echo ($context["EMAIL_SIG"] ?? null);
        echo "
";
    }

    public function getTemplateName()
    {
        return "user_welcome.txt";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  68 => 17,  58 => 10,  53 => 8,  45 => 3,  37 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "user_welcome.txt", "");
    }
}
