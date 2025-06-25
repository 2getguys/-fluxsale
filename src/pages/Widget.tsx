import React, { useState, useMemo } from 'react';
import { Code, Settings as SettingsIcon, RefreshCw } from 'lucide-react';
import PageHeader from '../components/ui/PageHeader';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';
import Select from '../components/ui/Select';
import Button from '../components/ui/Button';
import WidgetPreview from '../components/widget/WidgetPreview';
import CodeSnippet from '../components/widget/CodeSnippet';

const WidgetPage: React.FC = () => {
  const [language, setLanguage] = useState('uk');
  const [position, setPosition] = useState<'bottom-right' | 'bottom-left' | 'bottom-center'>('bottom-right');
  const [color, setColor] = useState('#3B82F6');
  const [buttonText, setButtonText] = useState('Написати нам');

  const widgetCode = useMemo(() => {
    return `<script>
(function() {
    var script = document.createElement('script');
    script.src = 'https://widget.ai-sales.com/widget.js';
    script.setAttribute('data-widget-id', 'your-widget-id');
    script.setAttribute('data-lang', '${language}');
    script.setAttribute('data-position', '${position}');
    script.setAttribute('data-color', '${color}');
    script.setAttribute('data-text', '${buttonText}');
    document.head.appendChild(script);
})();
</script>`;
  }, [language, position, color, buttonText]);

  return (
    <div className="p-8">
      <PageHeader title="Віджет" icon={Code} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card title="Налаштування віджета" icon={SettingsIcon}>
          <div className="space-y-4">
            <Select label="Мова віджета" value={language} onChange={(e) => setLanguage(e.target.value)}>
              <option value="uk">Українська</option>
              <option value="en">English</option>
              <option value="ru">Русский</option>
            </Select>
            <Select label="Позиція на сторінці" value={position} onChange={(e) => setPosition(e.target.value as any)}>
              <option value="bottom-right">Правий нижній кут</option>
              <option value="bottom-left">Лівий нижній кут</option>
              <option value="bottom-center">По центру знизу</option>
            </Select>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Колір віджета</label>
              <div className="flex space-x-2">
                <input
                  type="color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className="w-12 h-12 border border-gray-300 rounded"
                />
                <Input
                  type="text"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  containerClassName="flex-1"
                />
              </div>
            </div>
            <Input
              label="Текст кнопки"
              value={buttonText}
              onChange={(e) => setButtonText(e.target.value)}
            />
          </div>
          <div className="mt-6">
            <Button variant="primary" className="w-full">
              <RefreshCw size={18} className="mr-2" />
              Оновити віджет
            </Button>
          </div>
        </Card>

        <Card title="Код віджета" icon={Code}>
          <div className="mb-4">
            <p className="text-sm text-gray-600 mb-2">Скопіюйте цей код та вставте перед закриваючим тегом &lt;/body&gt; на вашому сайті:</p>
            <CodeSnippet code={widgetCode} />
          </div>
          <WidgetPreview color={color} position={position} buttonText={buttonText} />
        </Card>
      </div>
    </div>
  );
};

export default WidgetPage; 