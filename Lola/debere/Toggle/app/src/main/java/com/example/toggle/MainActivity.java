package com.example.toggle;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.TextView;
import android.widget.ToggleButton;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        final TextView tv = (TextView)findViewById(R.id.textView);
        final ToggleButton toggleB=(ToggleButton)findViewById(R.id.toggleButton);
        toggleB.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                if (((ToggleButton)v).isChecked()){
                    tv.setText("El boton esta en: On");
                }else{
                    tv.setText("El boton esta en: Off");
                }
            }
        });
    }
}