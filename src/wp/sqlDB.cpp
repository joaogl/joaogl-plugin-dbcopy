using namespace EchoRuntimeComponent;
using namespace Platform;

Platform::String^ EchoPluginRT::Echo(Platform::String^ input)
{
    if(input->IsEmpty())
    {
        return "Error: input string is empty.";
    }
    else
    {
        return input->ToString() + "echo";
    }
}